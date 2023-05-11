# Booking To GO

`BookingToGo Clone` is an clone app travel agent in Jakarta that sells airplane tickets, hotel vouchers, and car rentals with transparent, easy, and secure pricing.

**Notes** :

1. the latest version of React Native has a default of using TypeScript, so a little adaptation is necessary.
2. Some files were purposely not included in the .gitignore to facilitate the installation process

# Preview

<table>
    <tr>
     <td><em> screen </em></td>
     <td><em> android display </em></td>
     <td><em> ios display </em></td>
    </tr>
    <tr>
    <td><p>Splash Screen</p></td>
    <td><img src="/assets/android_splashscreen.png" alt="splashscreen screenshot" ></td>
    <td><img src="/assets/ios_splashscreen.png" alt="splashscreen screenshot" ></td>
    </tr>
    </tr>
    <tr>
    <td><p>Booking Screen</p></td>
    <td><img src="/assets/android_bookinghome.png" alt="booking android screenshot" ></td>
    <td><img src="/assets/ios_bookinghome.png" alt="booking ios screenshot" ></td>
    </tr>
    <tr>
    <td><p>Change Booking Information Screen</p></td>
    <td><img src="/assets/android_changeuserorder.png" alt="user information android screenshot" ></td>
    <td><img src="/assets/ios_changeuserorder.png" alt="user information ios screenshot" ></td>
    </tr>
    <tr>
    <td><p>Change Guest Information</p></td>
    <td><img src="/assets/android_addguest.png" alt="guest android screenshot"></td>
    <td><img src="/assets/ios_addguest.png" alt="guest ios screenshot"></td>
    </tr>
    <tr>
    <td><p>Change Guest Information 2</p></td>
    <td><img src="/assets/android_addguest1.png" alt="guest android screenshot"></td>
    <td><img src="/assets/ios_addguest2.png" alt="guest ios screenshot"></td>
    </tr>
</table>

# Used libraries:

1. [React Navigation](https://reactnavigation.org/).
2. [React Native Toast Message](https://github.com/calintamas/react-native-toast-message).
3. [Lottie React Native](https://github.com/lottie-react-native/lottie-react-native)
4. [babel plugin module resolver](https://github.com/tleunen/babel-plugin-module-resolver#readme)
5. [react-redux](https://react-redux.js.org/)
6. [react native dropdown](https://hossein-zare.github.io/react-native-dropdown-picker-website/)

# Author

[Ahmad Fathoni Zumaro](https://github.com/toniebe)

# Usage

1. clone the repository with command `git clone https://github.com/toniebe/cloneBookingToGo.git`
2. install all dependencies with command `yarn install` or `npm install` and command `cd ios && pod install` for ios
3. link asset to native project with command `npx react-native-asset`
4. create `.env` with variable BASE_URL = `https://parseapi.back4app.com/`, APPLICATION_ID = `Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3` and API_KEY = `4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy`
5. run application with command `yarn android` or `yarn ios`
6. First, you will enter the splash screen page, where the splash screen page uses the Lottie library for animation. On this splash screen page, it will retrieve data from API.
7. After passing the splash screen, you will be directed to the booking screen where you will get information about the hotel, booking details, and guests.
8. All data is stored in the reducer, so when you exit the application, you need to return to the splash screen to consume the API again.
9. The data that can be modified is the booking information and guest details.
10. To modify the booking information, you will be directed to the user detail page to fill in the latest personal information.
11. If you want to modify the guest information, you can click on the text 'Edit Guest'. You will be redirected to the guest data modification page. You can fill in the guest information as desired. The data will be automatically saved to the guest reducer when you click the 'Save' button. Therefore, on the guest data modification page, only the 'Add Guest' and 'Go Back' buttons are provided.
12. if you want to check linting you can run command `yarn lint`

**Notes**:

1. [The structure uses React container presenter for each screen.](https://medium.com/web-dev-freelancing/react-design-patterns-container-presenter-pattern-e7f2650442d7)
2. The data on the booking page has been saved in the reducer, so it doesn't need API calls anymore.
