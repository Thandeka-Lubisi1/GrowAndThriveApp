# Firebase Setup Guide for Grow & Thrive

This guide will help you set up Firebase as the backend for your Grow & Thrive app.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "grow-and-thrive")
4. Choose whether to enable Google Analytics (recommended)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" authentication:
   - Click on "Email/Password"
   - Toggle "Enable"
   - Click "Save"

## Step 3: Set Up Firestore Database

1. In your Firebase project, go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location closest to your users
5. Click "Done"

## Step 4: Configure Security Rules

1. In Firestore Database, go to the "Rules" tab
2. Replace the default rules with these secure rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read and write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      // Users can manage their own plants
      match /plants/{plantId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
      
      // Users can manage their own progress
      match /progress/{progressId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
      
      // Users can manage their own chat history
      match /chat_history/{messageId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
    
    // Marketplace listings are public to read, but only authenticated users can create
    match /marketplace/{listingId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

## Step 5: Get Your Firebase Configuration

1. In your Firebase project, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app with a nickname (e.g., "Grow & Thrive Web")
6. Copy the configuration object

## Step 6: Update Your Configuration

1. Open `firebase-config.js` in your project
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};
```

## Step 7: Test Your Setup

1. Open your app in a web browser
2. Try to create a new account
3. Try to log in
4. Check the browser console for any errors

## Step 8: Deploy Your App (Optional)

### Using Firebase Hosting:

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init hosting
   ```

4. Deploy your app:
   ```bash
   firebase deploy
   ```

## Database Structure

Your Firestore database will have the following collections:

### Users Collection
```
users/{userId}
├── firstName: string
├── lastName: string
├── age: number
├── email: string
├── createdAt: timestamp
├── language: string
├── lastLogin: timestamp
├── plants/{plantId}
│   ├── name: string
│   ├── type: string
│   ├── plantedDate: timestamp
│   ├── expectedHarvestDays: number
│   ├── status: string
│   ├── notes: string
│   ├── wateringSchedule: string
│   ├── lastWatered: timestamp
│   └── lastUpdated: timestamp
├── progress/{progressId}
│   └── (user progress data)
└── chat_history/{messageId}
    ├── message: string
    ├── isUser: boolean
    └── timestamp: timestamp
```

### Marketplace Collection
```
marketplace/{listingId}
├── vegetableName: string
├── quantity: number
├── pricePerKg: number
├── contactInfo: string
├── userId: string
├── userEmail: string
├── createdAt: timestamp
└── status: string
```

## Security Considerations

1. **Authentication**: All user data is protected by Firebase Authentication
2. **Data Access**: Users can only access their own data
3. **Marketplace**: Public read access, authenticated write access
4. **Offline Support**: Firestore provides offline persistence

## Troubleshooting

### Common Issues:

1. **"Firebase is not defined"**
   - Make sure Firebase SDK scripts are loaded before your app scripts
   - Check that `firebase-config.js` is included in your HTML

2. **"Permission denied"**
   - Check your Firestore security rules
   - Ensure users are authenticated before accessing data

3. **"Invalid API key"**
   - Verify your Firebase configuration in `firebase-config.js`
   - Check that your API key is correct

4. **"Network error"**
   - Check your internet connection
   - Verify Firebase project is active

### Getting Help:

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Console](https://console.firebase.google.com/)
- [Firebase Support](https://firebase.google.com/support)

## Next Steps

Once Firebase is set up, your app will have:

✅ **User Authentication** - Sign up, login, password reset
✅ **Data Persistence** - User data, plants, progress saved in the cloud
✅ **Real-time Updates** - Live data synchronization
✅ **Offline Support** - App works without internet
✅ **Marketplace** - Users can buy and sell vegetables
✅ **Chat History** - Conversation history saved per user

Your Grow & Thrive app is now ready for production use with a robust backend! 