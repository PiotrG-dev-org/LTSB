public with sharing class BoatSearchResults {
	
	@AuraEnabled
	public static List<Boat__c> getBoats(Id boatTypeId) {
		return [SELECT Name, BoatType__c, Contact__c, Description__c, Geolocation__c, Length__c, Picture__c, Price__c, Year_Built__c
				FROM Boat__c
				WHERE BoatType__c = :boatTypeId];
	}
}