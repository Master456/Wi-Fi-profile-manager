# How to use

- Install node.js
- Clone this repository (eg. to C:\Program Files\Wi-Fi-profile-manager)
- Rename profiles.sample.js to profiles.js and open it in your favourite editor
- Create a taks in task scheduler (Control panel --> Administration tools --> Task scheduler --> Create task ...)
  - Under General edit the following:
    - Name: Wi-Fi-profile-manager
    - Select SYSTEM as user for running the task
    - Select your OS at the bottom dropdown menu
  - Switch to the Trigger tab and create a new one
    - Start at: Event
    - Protocol: Microsoft-Windows-WLAN-AutoConfig/Operational
    - Source: WLAN-AutoConfig
    - Event id: 11001
  - Switch to the Actions tab and create a new one
    - Choose "Start a program" and select the wpm.bat
  - Switch to the Conditions tab
    - Uncheck the checkbox under Energy (this enables the task to run if your notebook is running on battery)
