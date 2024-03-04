# Sleeptracker

## Features
- Log overnight sleep.
- Log daytime sleepiness using the Stanford Sleepiness Scale.
- View logged data for both overnight sleep and sleepiness.
## Implementation
- Utilize native device resources.
- Store data in Firebase.

## Logging Overnight Sleep
- Log bedtime and wake-up time.
- Consider user scenarios for logging.
- Use the provided overnight-sleep-data.ts file as a starting point.

## Logging Sleepiness During the Day
- Log sleepiness on a 1-7 scale with timestamps.
- Support multiple logs per day.
- Utilize the stanford-sleepiness-data.ts file as a starting point.

## Viewing Logged Data
- Display both overnight sleep and sleepiness data.

# Installation

## Ionic CLI
```
npm i -g @ionic/cli
```

## Dependencies
- Install the required dependencies with the following command.
```
npm i
```

## Running Ionic
- After installing Ionic, you can run the following commands to run the app inside of the sleeptracker directory.
```
cd sleeptracker
ionic serve
```
