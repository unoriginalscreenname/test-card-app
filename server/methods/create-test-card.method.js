'use strict';

Meteor.methods({
  createTestCard: function(hypothesiId) {

    let hypothesi = Hypothesis.findOne(hypothesiId);

      let testCard = {
            'projectId':hypothesi.projectId,
            'hypothesiId':hypothesiId,
            'name':'test name 1',
            'assigned_to':[{
              name:faker.name.firstName()+' '+faker.name.lastName(),
              image:faker.image.avatar()
            }],
            'deadline':'date',
            'duration':'time',
            'hypothesis':hypothesi.name,
            'test':'to very this we will...',
            'metric':'to verify that we will...',
            'criteria':'we are right if...',
            'state':'backlog',
            'expanded':true
          }

      let testCardId = TestCard.insert(testCard);

      Meteor.call('createLearning', testCardId);

      return testCardId;
  }
});
