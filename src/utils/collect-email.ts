'use client';

import { GoogleSpreadsheet } from 'google-spreadsheet';

// Google Sheet ID (from your URL)
const SPREADSHEET_ID = '1ZlPTJUT53ISjpOcj9DV1z3VxKng3jg7MY6-IuSpGqzc';

// Load your Service Account Credentials
const SERVICE_ACCOUNT_CREDENTIALS = {
  type: 'service_account',
  project_id: 'micro-pagoda-446723-k8',
  private_key_id: 'aa020d13a362ba577c418cddce698f5cf6a37999',
  private_key: `-----BEGIN PRIVATE KEY-----
  MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2/QUP/cEATAUG
  LbC6+cbgHlRr4MuOayp0c1nRqyA2QKfgjiXkNhDWbbwE4hzUcuqkIbedBmQygePz
  2oQbsxl29qIzM0CoW4uBc+5+Y6SpQFgi+0ED/HWl5LNYj7wQ1YjgfMVJF9AtmC4I
  NgyfBxU7Qbyk2pi8RPZe2HyzNAlliRhC50yXw03hionitm+Xyov1/s4SG8By26NO
  2AzAPeTKsYUXCdK4qchbR36ezVvvnu9CTlpLj7oirl9hoolsdrhtNdGLQ8BbGK3R
  pZfokC43+GhEUhc/YhUtjgs6D4oGUkLjg2B6uz/JRgaqxgnQXDfGZ0EtbgJaHYvo
  6EBHe2WFAgMBAAECggEALunbfGgQLSVQPG9GWgljhV4BQs8VIOQ0tDpGksyOq5oT
  ...
  -----END PRIVATE KEY-----`,
  client_email: 'google-sheets-email-collect-19@micro-pagoda-446723-k8.iam.gserviceaccount.com',
  client_id: '108409331322878467650',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/google-sheets-email-collect-19%40micro-pagoda-446723-k8.iam.gserviceaccount.com',
};

export async function saveEmail(email) {
  try {
    // Initialize the spreadsheet
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    // Authenticate using the service account
    await doc.useServiceAccountAuth(SERVICE_ACCOUNT_CREDENTIALS);

    // Load the spreadsheet
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // First sheet in the spreadsheet

    // Append the email with the current timestamp
    await sheet.addRow({
      Email: email,
      Timestamp: new Date().toLocaleString(),
    });

    return { success: true, message: 'Email saved successfully!' };
  } catch (error) {
    console.error('Error saving email:', error);
    return { success: false, message: 'Failed to save email.' };
  }
}
