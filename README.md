# Ducatur oracles master

Docker-compose based ducor repositories run-up environment.

## Setup

Use `./setup.sh` for submodules initial update.

Use `.env` file for hosts settings.

## Run

There is docker-compose.yml as base, for local and prod runs overrides are used.

#####Available commands:
1. `*_start.sh`
2. `*_update.sh`
3. `*_stop.sh`

#### Locally:

To update and run, use:

    ./local_update.sh && ./local_start.sh 
To stop locally:

    ./local_stop.sh
    
#### Production:

Update and start, use:

    ./update.sh && ./start.sh

To stop:

    ./stop.sh
