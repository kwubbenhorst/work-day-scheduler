# work-day-scheduler
A day-planner that lets you enter and save tasks for each hour from 9-5 and visually track where you are in your workday

## Description: 
This webapp was created for employees with busy schedules who find that adding important events to a daily planner helps them manage their time more effectively. The scheduler displays the current time and date at the top of the page so that employees can see it at a glance. They will also see by the colouration of the timeblocks where they are in their day: time past is colored in grey, time ahead is coloured in green and the current hour is highlighted in red. There are 9 timeblocks representing the standard business hours of 9am to 5pm. Employees can enter their tasks and meetings into each timeblock's text area and click on the button at the end of the row to save that block's contents. Once saved, the entries will persist even if the browser session ends or the page is refreshed.

This page will be easy to adjust or maintain because the code which retrieves the stored content and the code which creates the dynamic colouration of time past, present and still to come, both employ a programmatic/iterative approach to manipulate the 9 time blocks.  If more or different time blocks are needed (eg. if a certain employee's working day runs from 8 till 4 or 8 till 8, instead of 9 till 5), only a few adjustments to the timeblock arrays need be made.  

Considerable use was made of third party apis in this project. Bootstrap was used for layout and components, fontawesome for icons, googlefonts for fonts, jquery for programming and dayjs for date/time features. The CDN links are included in the html, which are probably stable enough for the time-being and keep the application lightweight. If support for any of these libraries is withdrawn in the future it will be necessary to include the downloaded library files in the assets folder and update the link and script tags. If the evolution of browsers means that the latest updated version of the libraries is preferable, it might also become necessary to update the sources.

In ongoing agile conversation with users, it will be interesting to see whether the persistence of the stored data is, in fact, too persistent. A "clear" button could be added to the end of each row or a "clear all" button somewhere on the page, though it is easy enough to clear the fields manually just by typing over them. If employees like to be greeted by a clean scheduler page every morning, taking a few minutes before the start of work to make a plan for their custom day, they might appreciate a "clear all" feature. Currently the only way to have the fields empty at page-load, is to empty all the fields and save them individually before closing out the previous session. On the other hand if employees have tasks that recur at the same time every day, it might be convenient to have them already included in the scheduler.

User feedback is also going to be needed on the colour scheme.  The colors of grey, red and green were chosen because red lends a certain focus and urgency to the tasks within the current hour, grey suggests a field that has been disabled, and green suggests a field that is still in play. But they are not the best colours for accessibility. It will be challenging to distinguish red and green if any users are colour-blind.  Changing the colour scheme would just be a simple matter of adjusting three lines on the custom stylesheet.

JQuery is the principal programming syntax used in this web application. Although jQuery is not as much used as it once was, it is important as a developer to be familiar with it because of the need to maintain the 74% of extant applications that currently make use of it.  It has continued relevance for projects that aren't going to grow, and this is just a simple work-day scheduler, designed for a narrow purpose -- a perfect opportunity to practice the jQuery syntax.
 

## Installation

N/A  

## Usage

This web application is deployed and ready for use on the World Wide Web.  Please visit https://kwubbenhorst.github.io/work-scheduler

The following screenshots provide a visual guide to how it can be used.

![Screen Shot 2023-10-31 at 11 28 01 AM](https://github.com/kwubbenhorst/work-day-scheduler/assets/140316693/1714ed54-659e-4644-8a9c-90c5d175972a)

![Screen Shot 2023-10-31 at 11 28 38 AM](https://github.com/kwubbenhorst/work-day-scheduler/assets/140316693/08b1e25d-479e-4ceb-91d6-0cd8dca639e4)

Entries saved in local Storage can be overwritten to create and save new entries

![Screen Shot 2023-10-31 at 11 32 41 AM](https://github.com/kwubbenhorst/work-day-scheduler/assets/140316693/141d0f39-18b2-4efb-b8e2-b14537c56d65)

Returning a few days later in a different browser session at a different time of day, note that the time has been continually updated and is still accurate, with the corresponding appearance of the day-scheduler in terms of the past, present and future colouring, having been updated too. The entries saved on Tuesday, October 31 are still persisting on November 5, having been retrieved from the local storage of the device used.

![Screen Shot 2023-11-05 at 8 32 04 PM](https://github.com/kwubbenhorst/work-day-scheduler/assets/140316693/80998735-268c-4841-94dd-8b2f6ce37635)


## Credits

Karla Wubbenhorst wrote the script.js file using jQuery which provides dynamic functionality to this web application. Its html structure and custom css styling was provided in sourcecode from EdX bootcamp's module 5 challenge. To arrive at the syntax I used in the renderEntries and setPastPresentFuture functions to iterate through arrays using the .each method I consulted the jQuery library's learning centre documentation: https://learn.jquery.com/using-jquery-core/iterating/, and Stack Overflow. I am also indebted to Traversy Media's 5 part crash course in JQuery on youtube for solidifying the general concepts of DOM traversal and click event handling.       

## License

Licensed under the MIT license
