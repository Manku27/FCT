# Service form

## Network

Average conditions of the service are in locations with bad network.
So : Service form should work offline.
How : Using Progressive Web Apps, we set up service workers which can cache assets for us.

### Flow :

1. Get api gives us the initial data to pre-populate our form
2. This api is called as soon as ticket is received, maybe along the ticket itself
3. The relevant data gets stored in Local Storage
4. When user starts filling the form :
   a. Assets are pulled from cache (service worker)
   b. data is pulled from local storage
5. The form is multi-paged. When the page changes or the user hits submit, the data gets saved in the IndexedDB.
6. IndexedDB is synced with server as soon as network is available.

PS. Images :
The frequency of visits per user per day is 1/2.
So the images will also be saved in IndexedDB in base64 format.

## Screen

Primary usage is on mobile phones, so a mobile first design will be made.
MUI will be used for components and base.

### Form

Formik for form operation + Yup for validations + MUI for field components.
Form is pretty straight forward, maximum complexity is of conditional fields.

### Multi Step Form

Steps will be in a horizontally scorllable list, with progress indicator under it.
Progress indicator colors :
Grey - empty
Green - filled properly
Red - some error

## Timeline

Demo - 18th Sept

### Priority -

1. Form basic functionality
2. Styling
3. Validations and Progress Bar
4. GET api integration
5. POST api integration
6. Add IndexedDB for offline POST
7. PWA - Cache website to work offline
