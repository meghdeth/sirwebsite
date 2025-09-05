const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function checkResearchOrder() {
  try {
    const db = await open({
      filename: './database.sqlite',
      driver: sqlite3.Database
    });

    console.log('Current research content ordering:');
    const research = await db.all('SELECT id, title, order_index FROM research_content ORDER BY order_index ASC, created_at DESC');
    
    research.forEach((item, index) => {
      console.log(`${index + 1}. [Order: ${item.order_index}] ${item.title}`);
    });

    await db.close();
  } catch (error) {
    console.error('Error:', error);
  }
}

checkResearchOrder();