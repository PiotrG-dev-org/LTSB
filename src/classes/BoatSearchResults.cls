public with sharing class BoatSearchResults {
	
	@AuraEnabled
	public static List<Boat__c> getBoats(String boatTypeId) {
			String query = 'SELECT Id, Name, BoatType__c, Contact__r.Name, Description__c, ' +
					+'Length__c, Picture__c, Price__c, Year_Built__c ' +
					+'FROM Boat__c';

			if (String.isBlank(boatTypeId) == false) {
				query += ' WHERE BoatType__c = \'' + boatTypeId + '\'';
			}

			return Database.query(query);
	}
}