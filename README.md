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

## Packages
```
npm i -g typescript
npm i -g live-server
```

## Running Transpiler
- After installing above packages, you can run the following command to recompile code automatically.
```
tsc --watch --p tsconfig.json
```

## View in live-server
- Use the live-server installed to view the application.
