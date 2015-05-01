#!/bin/sh

main(){
  source ./common-var.sh
  cd ${db_path}
  mongod --replSet ${rs_name} --port ${master_port} --dbpath ./rs1 --logpath ./log/rs1.log
}

main "$@"
