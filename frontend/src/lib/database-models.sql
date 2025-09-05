-- Database Models for LDS Lab Website
-- This file contains the SQL schema for all the data structures used in the website

-- Users table for admin authentication
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role ENUM('admin', 'editor') DEFAULT 'editor',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Messages table for contact form submissions
CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    file_name VARCHAR(255) NULL,
    file_path VARCHAR(500) NULL,
    read_status BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_read_status (read_status),
    INDEX idx_created_at (created_at)
);

-- News table for news management
CREATE TABLE news (
    id INT PRIMARY KEY AUTO_INCREMENT,
    year VARCHAR(4) NOT NULL,
    title VARCHAR(500) NOT NULL,
    content TEXT NOT NULL,
    link VARCHAR(500) NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_year (year),
    INDEX idx_active (is_active)
);

-- Publications table for research publications
CREATE TABLE publications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title TEXT NOT NULL,
    authors TEXT NOT NULL,
    journal VARCHAR(500) NOT NULL,
    year VARCHAR(4) NOT NULL,
    volume VARCHAR(50) NULL,
    pages VARCHAR(50) NULL,
    doi VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_year (year),
    INDEX idx_journal (journal),
    INDEX idx_active (is_active)
);

-- Home content table for homepage management
CREATE TABLE home_content (
    id INT PRIMARY KEY AUTO_INCREMENT,
    section ENUM('hero', 'about', 'highlights') NOT NULL,
    title VARCHAR(500) NULL,
    content TEXT NULL,
    image_url VARCHAR(500) NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_section (section),
    INDEX idx_order (display_order),
    INDEX idx_active (is_active)
);

-- Group members table for group page
CREATE TABLE group_members (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    bio TEXT NULL,
    email VARCHAR(255) NULL,
    profile_image VARCHAR(500) NULL,
    linkedin_url VARCHAR(500) NULL,
    research_interests TEXT NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_position (position),
    INDEX idx_order (display_order),
    INDEX idx_active (is_active)
);

-- Teaching content table for courses and teaching materials
CREATE TABLE teaching_content (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_code VARCHAR(50) NULL,
    course_name VARCHAR(255) NOT NULL,
    semester VARCHAR(50) NULL,
    year VARCHAR(4) NULL,
    description TEXT NULL,
    syllabus_url VARCHAR(500) NULL,
    materials_url VARCHAR(500) NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_year (year),
    INDEX idx_course (course_code),
    INDEX idx_order (display_order),
    INDEX idx_active (is_active)
);

-- Research areas table for research page
CREATE TABLE research_areas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(500) NULL,
    keywords TEXT NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_order (display_order),
    INDEX idx_active (is_active)
);

-- Gallery categories table for gallery organization
CREATE TABLE gallery_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_order (display_order),
    INDEX idx_active (is_active)
);

-- Gallery images table for image management
CREATE TABLE gallery_images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT NOT NULL,
    title VARCHAR(255) NULL,
    description TEXT NULL,
    image_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500) NULL,
    alt_text VARCHAR(255) NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES gallery_categories(id) ON DELETE CASCADE,
    INDEX idx_category (category_id),
    INDEX idx_order (display_order),
    INDEX idx_active (is_active)
);

-- Settings table for website configuration
CREATE TABLE settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    setting_key VARCHAR(255) UNIQUE NOT NULL,
    setting_value TEXT NULL,
    description TEXT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_key (setting_key)
);

-- Insert default admin user (password should be hashed in production)
INSERT INTO users (username, password, email, role) VALUES 
('admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@ldslab.com', 'admin');

-- Insert default settings
INSERT INTO settings (setting_key, setting_value, description) VALUES 
('site_title', 'LDS Lab - Low-Dimensional Semiconductors Lab', 'Website title'),
('site_description', 'Professional academic website featuring research, publications, and more', 'Website description'),
('contact_email', 'surendra@iitm.ac.in', 'Primary contact email'),
('contact_phone', '+91-44-2257-4770', 'Primary contact phone'),
('lab_address', 'Low-Dimensional Semiconductors Lab, Department of Metallurgical and Materials Engineering, Indian Institute of Technology Madras, Chennai - 600036, Tamil Nadu, India', 'Lab address'),
('office_hours', 'Monday - Friday: 9:00 AM - 6:00 PM, Saturday: 9:00 AM - 1:00 PM', 'Office hours');