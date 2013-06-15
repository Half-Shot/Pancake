echo "A little housekeeping to clear away temp files."
rm -r */*~
rm -r */*~
echo "Adding js files."
git add js/*.js
echo "Adding other files."
git add *
echo "Commiting"
git commit -a
echo "If your happy you can git push"
