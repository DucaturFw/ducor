# Ducatur oracles master

Docker-compose based ducor repositories run-up environment.

## Setup

Use `./setup.sh` for submodules initial update.

Use `.env` file for hosts settings.

There are 2 submodules: `backend` and `frontend`<br>
To update submodules, use:

    git submodule foreach git pull origin master

## Run

There is docker-compose.yml as base, for local and prod runs overrides are used.

#####Available commands:
1. `*start.sh`
2. `*update.sh`
3. `*stop.sh`

`start.sh` scripts support positional parameter detach to run docker containers in a background:

    *start.sh -d

#### Locally:

To update and run, use:

    ./local_update.sh && ./local_start.sh  -d
To stop locally:

    ./local_stop.sh
    
#### Production:

Update and start, use:

    ./update.sh && ./start.sh -d

To stop:

    ./stop.sh
