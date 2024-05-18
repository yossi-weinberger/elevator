# Elevators and Floors

This is an interactive application that simulates elevators and floors in a building. The project is deployed on Vercel at: https://elevator-murex.vercel.app/

![Screenshot](/public/screenshot.jpeg?raw=true "Screenshot")

## Functionality

- Display of 8 floors in the building
- 3 elevators that operate between the floors
- Clicking on a floor number sends the nearest elevator to that floor
- Display of the travel time of the elevator to the selected floor
- 'Ding' sound when the elevator arrives at the selected floor

## Technologies

- React
- Next.js
- CSS

## Installation and Running

1. Install the required packages with `npm install`
2. Run the app with `npm run dev`
3. Navigate to `http://localhost:3000` in your browser

## Project Structure

The project structure is divided into three main components:

1. **Floors**: This component displays all the floors in the building. It contains a row of buttons, one for each floor, that can be clicked to call an elevator. It also displays a small screen showing the remaining time until the elevator arrives at the selected floor.

2. **Elevators**: This component displays the elevators themselves. It calculates the nearest elevator to the selected floor and moves it to that floor with a smooth animation. It also plays a "ding" sound when the elevator reaches its destination.

3. **App/page**: the main page of the application. It contains the other two components (Floors and Elevators) and allows communication between them through prop passing.

Each component is a separate React file with its own CSS style. The project also utilizes React Hooks such as `useState` and `useEffect` for state management and responding to changes.

## Technical Details

### Floors

- `numFloors`: A variable containing the number of floors in the building (8).
- `remainingTime`: A state variable holding the remaining time until the elevator arrives at the selected floor.
- `setRemainingTime`: A function to update `remainingTime`.
- `handleFloorClick`: A function called when a floor button is clicked. It passes the floor number to the parent component through the `onFloorClick` prop.
- `renderFloors`: A function that renders the floors and creates a button for each floor. It also displays the `TimeScreen` with the corresponding `remainingTime`.

### Elevators

- `floorHeight`: The height of one floor in pixels.
- `numElevators`: The number of elevators (3).
- `transitionTime`: The transition time in seconds for the elevator to move between floors.
- `elevators`: An array of elevators, where each elevator contains the properties `id` (sequential number), `pos` (current position in pixels), `duration` (transition time to the next floor in seconds).
- `setElevators`: A function to update `elevators`.
- `useEffect`: A hook that calculates the nearest elevator to the selected floor and moves it to that floor. It also plays a "ding" sound when the elevator reaches its destination.
- `renderElevators`: A function that renders the elevators and creates a div for each elevator with the appropriate CSS styles for position and transition time.

### App/page

- `selectedFloor`: A state variable holding the selected floor.
- `setSelectedFloor`: A function to update `selectedFloor`.
- `transitionDuration`: A state variable holding the transition duration of the elevator.
- `setTransitionDuration`: A function to update `transitionDuration`.

The `App/page` page passes `selectedFloor` and `transitionDuration` as props to the `Floors` and `Elevators` components, and receives `setSelectedFloor` and `setTransitionDuration` from them to update these variables.
