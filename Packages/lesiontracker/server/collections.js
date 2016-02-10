Meteor.publish('timepoints', function() {
    return Timepoints.find();
});

Meteor.publish('singlePatientTimepoints', function(patientId) {
    return Timepoints.find({
        patientId: patientId
    });
});

Meteor.publish('studies', function() {
    return Studies.find();
});

Meteor.publish('singlePatientAssociatedStudies', function(patientId) {
    return Studies.find({
        patientId: patientId
    });
});

Meteor.publish('singlePatientMeasurements', function(patientId) {
    return Measurements.find({
        patientId: patientId
    });
});

// Temporary fix to drop all Collections on server restart
// http://stackoverflow.com/questions/23891631/meteor-how-can-i-drop-all-mongo-collections-and-clear-all-data-on-startup
Meteor.startup(function() {
    var globalObject = Meteor.isClient ? window : global;
    for (var property in globalObject) {
        var object = globalObject[property];
        if (object instanceof Meteor.Collection) {
            object.remove({});
        }
    }
});
