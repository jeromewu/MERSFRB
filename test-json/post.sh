#!/bin/sh

main(){
  curl -v -H "Content-Type: application/json" -X PUT --data "@${2}" http://localhost:3000/api/v1/${1}
}

main "$@"
