#!/bin/bash


# argument du nom dela BDD
database_name=$1

#  <<EOF permet de passer plusieurs lige à mongosh
mongosh <<EOF
use $database_name;
db.stats();
exit;
EOF