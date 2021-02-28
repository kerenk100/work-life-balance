chrome.alarms.onAlarm.addListener(function() {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.notifications.create({
    type: 'basic',
    title: 'Stretch Reminder',
    iconUrl: 'stretch.jpg',
    message: 'Time to stretch and relax',
    requireInteraction: true
  })
});
