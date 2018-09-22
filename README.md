# Noted

A new and improved Lambda Notes done post-graduation from Lambda.

# Color Codes

**Upper Cardview Row Blue:** #3f51b5

**Landing Background:** #424242

**Navigation Background:** [same as Landing]

**Container Background:** #303030

**Landing Popover Background:** [same as container]

# Major To-Do

- Consider moving the database to Django and weigh options.
- Triple check color codes and revamp them to be more accurate.
- Create "Note" modification and creation screens, add the ability to create dates for them (future planning?).
- Find a way to render content inside `containedview`, right now it's just labeled as `{this.props.content}` and that's not going to work when I'm rendering larger bits like entire components.
- **RESEARCH HIGHER ORDER COMPONENTS AND RENDER PROPS**

# ToDo

- **Features:**

  - A calendar to keep track of note dates.
  - Maybe a daily to-do popover.
  - _think dayplanner but mobile/desktop_
  - Add Dates to the notes, then an option to render them in the calendar.
  - DJango Back-End instead of Node? A little easier to manage, and I want to work in Python again :D.

- **Landing:**

  - Possibly adjust sign-up and sign-in buttons to transition down when loading the login-signup screens.

- **Noteview:**

  - It wouldn't hurt to have maybe some buttons added to the small-version of the navigation in the noteview section. Possibly icons that reference different things. These will only display when the navigation bar is collapsed. Maybe look into some custom icons, or just basic white icons to go in place of the navigation buttons.

- **Calendar**

  - Add a container that populates notes below the calendar component.
  - OnClick for dates should populate with a list of notes on that day below the calendar container. Those notes should then connect to the note itself.
  - Maybe a color for the text that dictates whether or not there is a note registered to that day.
  - Still not sure about the Calendar as a whole, possibly a way of making it a little less-intrusive - maybe keeping it at a static position on the top of the page, and when you click a date it'll render the notes listed to that day?

- **Axios**

  - Set an `actions` folder, set-up CRUD actions that interact with the back-end.
  - Map `GET` requests to cards, creating a card should post title/content, then create a date to post to the database.

# Broken Stuff

- **Landing:**

  - Not super reactive at lower layouts, will need to add breakpoints for size at phone.
  - Buttons and fields to sign-up feel off, and the layout feels rather dull. It's minimal, but almost too minimal.

- **Noteview:**

  - Not reactive, cards don't completely fill the container when the navigation is collapsed. Find a way of making them work? Maybe bigger cards?
  - Upper view where it shows the page you're currently on - maybe add some new stuff?
    - Buttons to add cards
    - Light/Dark theme (stretch)
    - Organize (stretch)
    - _They don't have to work yet, maybe just icons for now_
  - Notes are broken when they have to do anything that involves expanding or collapsing. Currently made them big enough to fill the entire width of their container so users will not be able to accidentally click on other notes.
  - Will need to implement buttons that appear when you click on the notes, allowing users to edit/delete the notes at will with a pop-up modal to confirm deleting the notes.
  - Possibly a note-graveyard? If you accidentally delete a note, have a way to bring it back within a certain time period (or until you clear out your graveyard of notes).

- **Routes**
  - Navigating to and from the landing works, but navigating within is a little difficult due to the animations. Maybe using the state-navigation?
  - **UTILIZED - StateNavigation (container) is done without routes**

# Dependencies

[React-Calendar](https://www.npmjs.com/package/react-calendar)
