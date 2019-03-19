define([],function(){
	var mappings = {
		"imageURL" : "imageURL",
		"isRead" : "isRead",
		"notificationActionLink" : "notificationActionLink",
		"notificationId" : "notificationId",
		"notificationModule" : "notificationModule",
		"notificationSubject" : "notificationSubject",
		"notificationSubModule" : "notificationSubModule",
		"notificationText" : "notificationText",
		"receivedDate" : "receivedDate",
		"result" : "result",
		"searchString" : "searchString",
		"unreadNotificationCount" : "unreadNotificationCount",
		"userNotificationId" : "userNotificationId",
	};
	Object.freeze(mappings);
	
	var typings = {
		"imageURL" : "string",
		"isRead" : "string",
		"notificationActionLink" : "string",
		"notificationId" : "string",
		"notificationModule" : "string",
		"notificationSubject" : "string",
		"notificationSubModule" : "string",
		"notificationText" : "string",
		"receivedDate" : "string",
		"result" : "string",
		"searchString" : "string",
		"unreadNotificationCount" : "string",
		"userNotificationId" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"notificationId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "RBObjects",
		tableName : "Notifications"
	};
	Object.freeze(config);
	
	return config;
})
