#!/bin/bash
set -e

mongo <<EOF
use admin
db = db.getSiblingDB('$MONGO_INITDB_DATABASE')
db.createUser(
  {
      user: '$MONGO_INITDB_ROOT_USERNAME',
      pwd: '$MONGO_INITDB_ROOT_PASSWORD',
      roles: [
          {
              role: "readWrite",
              db: '$MONGO_INITDB_DATABASE'
          }
      ]
  }
);

db.createCollection('settings', { capped: false });
EOF

mongoimport --db $MONGO_INITDB_DATABASE --username $MONGO_INITDB_ROOT_USERNAME --password $MONGO_INITDB_ROOT_PASSWORD --collection settings --file /home/mongodb/seed.json --jsonArray