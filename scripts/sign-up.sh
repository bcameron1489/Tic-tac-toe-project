curl "https://aqueous-atoll-85096.herokuapp.com/sign-up" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
}'

# EMAIL='' PASSWORD='' PASSWORD_CONFIRMATION='' sh scripts/sign-up.sh
