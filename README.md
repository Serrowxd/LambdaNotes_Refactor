# LambdaNotes_Refactor

A new and improved Lambda Notes done post-graduation from Lambda.

# Color Codes

**Upper Cardview Row Blue:** #3f51b5

**Landing Background:** #424242

**Navigation Background:** [same as Landing]

**Container Background:** #303030

**Landing Popover Background:** [same as container]

# ToDo

- **Features:**

  - A calendar to keep track of note dates.
  - Maybe a daily to-do popover
  - _think dayplanner but mobile/desktop_

- **Landing:**

  - Possibly adjust sign-up and sign-in buttons to transition down when loading the login-signup screens.

- **Noteview:**

  - It wouldn't hurt to have maybe some buttons added to the small-version of the navigation in the noteview section. Possibly icons that reference different thing.
  - Second idea, just collapse the blue bar and fill the screen with the notes.

# Broken Stuff

- **Landing:**

  - Not super reactive at lower layouts, will need to add breakpoints for size.
  - Buttons and fields to sign-up feel off, and the layout feels rather dull. It's minimal, but almost too minimal.

- **Noteview:**

  - Not reactive, cards don't completely fill the container when the navigation is collapsed. Find a way of making them work? Maybe bigger cards?
  - Upper view where it shows the page you're currently on - maybe add some new stuff?
    - Buttons to add cards
    - Light/Dark theme (stretch)
    - Organize (stretch)
    - _They don't have to work yet, maybe just icons for now_

- **Routes**
  - Navigating to and from the landing works, but navigating within is a little difficult due to the animations. Maybe using the state-navigation?
  - **UTILIZED - StateNavigation (container) is done without routes**
