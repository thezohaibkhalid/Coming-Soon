'use server'

import { GoogleSpreadsheet } from 'google-spreadsheet'

export async function collectEmail(formData: FormData) {
  const email = formData.get('email')
  
  // This is a mock function that simulates email collection
  // In a real implementation, you would use the Google Sheets API
  console.log('Collected email:', email)
  
  return {
    success: true,
    message: 'Thank you for subscribing!'
  }
}

