#!/bin/zsh
set -e

echo "Running Raspberry Pi rpiboot..."
echo
echo "If this stays at 'Waiting', unplug and replug the RetroFlag/CM4 while boot/flash mode is enabled."
echo

cd /private/tmp/usbboot
export DYLD_LIBRARY_PATH=/private/tmp/rpiboot-local/lib
./rpiboot -v -d mass-storage-gadget64

echo
echo "rpiboot finished. Current disks:"
diskutil list

echo
echo "You can now use Raspberry Pi Imager to flash the newly visible CM4 storage."
echo "Press Enter to close this window."
read
