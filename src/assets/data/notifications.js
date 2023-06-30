export const notificationData = [{
    type: 'reaction',
    data: {
      user: 'Mark Webber',
      post: 'My first tournament today!',
      time: '1m',
      photo: 'avatar-mark-webber.webp'
    },
    new: true
  },{
    type: 'follow',
    data: {
      user: 'Angela Gray',
      time: '5m'
    },
    new: true
  },{
    type: 'group',
    data: {
      user: 'Jacob Thompson',
      groupName: 'Chess Club',
      action: 'joined',
      time: '1 day'
    },
    new: true
  },{
    type: 'message',
    data: {
      user: 'Rizky Hasanuddin',
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: '5 days'
    },
    new: false
  },{
    type: 'comment',
    data: {
      user: 'Kimberly Smith',
      post: 'picture',
      time: '1 week',
    },
    new: false
  }, {
    type: 'reaction',
    data: {
      user: 'Nathan Peterson',
      post: '5 end-game strategies to increase your win rate',
      time: '2 weeks'
    },
    new: false
  }, {
    type: 'group',
    data: {
      user: 'Anna Kim',
      groupName: 'Chess Club',
      action: 'left',
      time: '2 weeks'
    },
    new: false
  }]

