// 'use client';

// import { GoogleSpreadsheet } from 'google-spreadsheet';

// // Google Sheet ID (from your URL)
// const SPREADSHEET_ID = '1ZlPTJUT53ISjpOcj9DV1z3VxKng3jg7MY6-IuSpGqzc';

// // Load your Service Account Credentials
// const SERVICE_ACCOUNT_CREDENTIALS = {
//   type: 'service_account',
//   project_id: 'micro-pagoda-446723-k8',
//   private_key_id: 'aa020d13a362ba577c418cddce698f5cf6a37999',
//   private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2/QUP/cEATAUG\nLbC6+cbgHlRr4MuOayp0c1nRqyA2QKfgjiXkNhDWbbwE4hzUcuqkIbedBmQygePz\n2oQbsxl29qIzM0CoW4uBc+5+Y6SpQFgi+0ED/HWl5LNYj7wQ1YjgfMVJF9AtmC4I\nNgyfBxU7Qbyk2pi8RPZe2HyzNAlliRhC50yXw03hionitm+Xyov1/s4SG8By26NO\n2AzAPeTKsYUXCdK4qchbR36ezVvvnu9CTlpLj7oirl9hoolsdrhtNdGLQ8BbGK3R\npZfokC43+GhEUhc/YhUtjgs6D4oGUkLjg2B6uz/JRgaqxgnQXDfGZ0EtbgJaHYvo\n6EBHe2WFAgMBAAECggEALunbfGgQLSVQPG9GWgljhV4BQs8VIOQ0tDpGksyOq5oT\n8CxBZqq90lu70nyt64GyynWif21+DrziVkh1iix2oNtGZl4De6ZMs9mnEVw2gPXw\nIrfLyVvWRbvGhzQCgUZdm0AhzEWAp8/WLWC+B59nQBPwa0tn0QzVJSfXgJIcvpzh\nlRqxXwRbFOon8FPC7IBpbmsPznvtXDGYrzeviAmxga5egymlkO0OJUM2+XhBUIpl\nNftsNtge+eqlWWWXWnkb3cnvusM3Rhu0EL2XUHEr85Sv3daCAHVBWTW3K6ntEcbq\nhAydWMn3QrCVO/81JqbVAwb43KcJKjQ6epwNMHYlmQKBgQDy7aM0KYi7x6F4/gKf\n4IbXkeFT3WufZtONRXDsntMn80YTaGLfZGyiGf+tDA+Smv8CyDOCH7EcCELYq3pq\nqnnx7xNTPUvms/y1nuCKs9IqVFtb7Iv7zvv+PJyX+MS4rts3jP5ZYHIz+6U/vuNE\n/rkICNgEtVFlWwi8lCMQkGyQ+wKBgQDA1bQiw+Qt8vKXRR9E4P3VA7kRHOSa73bX\nKNB8/BHDxK5UEe3o9axMCUBRm8XhVLCoLqUoCS/MmpAavyG9bWtDggnJl3Qd5CGD\nTH5qVGVVg35HgzjWvTs/hgd54IZw/e/VQ9KevkTHeUhJLsv9Ay+jwGyXMRTv3OZ7\nLwG1PO8bfwKBgQCABfCeisz+eSSFyQfFDeTCMqUXN3eCWARhTRlH+iO5yCFEFR0W\nMax2eVEe9141mu2Nn8hVaTJDXa8s1KH9GL6PW7lJguI/QNeLN6GKN14o5LAI786N\n8/UldPfptzalRbFNw0Y//+3vq0zZHVZUhBErRM3jHVM6IRGnoEIidppghQKBgHiq\nANM0Quchu/0+KofeRddyQe7cZowwxetyxas/zBn1S6Sdp4J7oDngHBg04kjSxswm\njAAWZ4ufOAcUjJdNDa6rg1Za6DUAGJxhVEVS1CoDYxR6nyl4NcfVJX51KYswy09m\n5jehFcbANKRenRSQVtIfyZN+Cfzh/HMegfIX1AMfAoGAIF0FFZn31PHTNiTb9VRV\nX4iaL8jwbIaH/YtUldtHD0ipvv1PQ7qmBovXgeiHgK4x1WK0fC9ilwizrkdY+jcm\nMW1th+g/ZJeNpLI/b0qAEz2ytRJfjgG3juo/3Gbkxu1U1tyTpVE/nv5+rW5pJqpM\n8AQaXJ5oTap0ruv5Y3i92mo=\n-----END PRIVATE KEY-----\n",,
//   client_email: 'google-sheets-email-collect-19@micro-pagoda-446723-k8.iam.gserviceaccount.com',
//   client_id: '108409331322878467650',
//   auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//   token_uri: 'https://oauth2.googleapis.com/token',
//   auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//   client_x509_cert_url:
//     'https://www.googleapis.com/robot/v1/metadata/x509/google-sheets-email-collect-19%40micro-pagoda-446723-k8.iam.gserviceaccount.com',
// };

// export async function saveEmail(email) {
//   try {
//     // Initialize the spreadsheet
//     const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

//     // Authenticate using the service account
//     await doc.useServiceAccountAuth(SERVICE_ACCOUNT_CREDENTIALS);

//     // Load the spreadsheet
//     await doc.loadInfo();
//     const sheet = doc.sheetsByIndex[0]; // First sheet in the spreadsheet

//     // Append the email with the current timestamp
//     await sheet.addRow({
//       Email: email,
//       Timestamp: new Date().toLocaleString(),
//     });

//     return { success: true, message: 'Email saved successfully!' };
//   } catch (error) {
//     console.error('Error saving email:', error);
//     return { success: false, message: 'Failed to save email.' };
//   }
// }
