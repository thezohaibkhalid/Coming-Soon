// netlify/functions/countdown.js

exports.handler = async function(event, context) {
    const launchDate = new Date("2025-04-01T00:00:00").getTime();  
    const now = Date.now();
    const remainingTime = launchDate - now;
  
    if (remainingTime < 0) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Launch has already occurred" })
      };
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        remainingTime: remainingTime
      })
    };
  };
  