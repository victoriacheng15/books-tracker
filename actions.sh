#! /usr/bin/bash

update_main() {
  git checkout main
  sleep 1
  git fetch && git pull origin main
}

run_rome() {
  pnpm run rome:apply
  sleep 1
  pnpm run rome:write
}

action_array=("update main" "rome lint and format")

PS3="Select the action: "
select action in "${action_array[@]}"
do
  case $action in
    ${action_array[0]})
      update_main
      exit
      ;;
    ${action_array[1]})
      run_rome
      exit
    ;;
  esac
done