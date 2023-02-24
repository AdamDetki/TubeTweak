const _sub = {
    url: [
      {
        urlMatches: 'https://www.youtube.com/feed/subscriptions',
      },
    ],
  };
  
  chrome.webNavigation.onCompleted.addListener(() => {
    console.info("The user has loaded my favorite website!");
  }, _sub);