#!/bin/sh

main(){
  source ./common-var.sh
  cd ${db_path}
  mongod --replSet ${rs_name} --port $(bc <<< ${master_port}-1) --dbpath ./rs2 --logpath ./log/rs2.log
}

main "$@"
