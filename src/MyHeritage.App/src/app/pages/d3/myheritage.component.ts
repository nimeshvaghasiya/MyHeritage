import { Component } from '@angular/core';
import { MyHeritageService } from '../../shared/services/myharitage.service'

@Component({
    templateUrl: 'myheritage.component.html'
})

export class MyHeritageComponent {
    d3: any = require('d3');
    treeData: any;
    constructor(private myHeritageService: MyHeritageService
    ) {
        this.treeData = JSON.parse('[{"TreeMemberId":711,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"Jasmatbhai","MiddleName":"","LastName":"vaghasiya","Gender":"Male","MemberImage":"","Email":"jasmatbhai@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-706,"RelationId":2,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":null,"Spouses":[{"TreeMemberId":712,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"Ambaben","MiddleName":"","LastName":"vaghasiya","Gender":"Female","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":6,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false}],"children":[{"TreeMemberId":713,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"kankuben","MiddleName":"","LastName":"vaghasiya","Gender":"Female","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":8,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":714,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"arajanbhai","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[{"TreeMemberId":720,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"karamshibhai","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-714,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[{"TreeMemberId":722,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"sandip","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-720,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":723,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"manish","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-720,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":725,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"jalpa","MiddleName":"","LastName":"","Gender":"Female","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-720,"RelationId":8,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":null,"children":[]}]},{"TreeMemberId":721,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"mukeshbhai","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-714,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]}]},{"TreeMemberId":715,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"gulalben","MiddleName":"","LastName":"","Gender":"Female","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":8,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":null,"children":[]},{"TreeMemberId":716,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"chandubhai","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":717,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"valiben","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":718,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"shantaben","MiddleName":"","LastName":"","Gender":"Female","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":8,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":719,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"vallabhbhai","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":706,"LinkToMemberMasterId":24391,"ParentIdentityId":24391,"SiteUserId":"","FirstName":"Jivrajbhai","MiddleName":"","LastName":"vaghasiya","Gender":"Male","MemberImage":"","Email":"","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-704,"RelationId":7,"AddressLine1":"a-27, radhakrishna soc., khodiyar nagar road","AddressLine2":"varachha","ZipCode":"395006","State":"0","linktoCountryMasterId":94,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"Yes","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"","MothersVillage":"","BusinessName":"","HomePhone":"8511323695","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":"2015-08-07T09:41:25.593","CreatedBy":0,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":-1,"BirthlinktoCountryMasterId":-1,"IsReplaceWithMember":null,"Spouses":[{"TreeMemberId":708,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"viruben","MiddleName":"","LastName":"","Gender":"Female","MemberImage":"","Email":"","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-706,"RelationId":6,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":true,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false}],"children":[{"TreeMemberId":709,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"Anusoyaben","MiddleName":"","LastName":"","Gender":"Female","MemberImage":"","Email":"anusoyaben@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-706,"RelationId":8,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":710,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"Kailasben","MiddleName":"","LastName":"","Gender":"Female","MemberImage":"","Email":"kailasben@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-706,"RelationId":8,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":null,"children":[]},{"TreeMemberId":704,"LinkToMemberMasterId":24391,"ParentIdentityId":24391,"SiteUserId":"","FirstName":"Ashokbhai","MiddleName":"Jivrajbhai","LastName":"vaghasiya","Gender":"Male","MemberImage":"","Email":"","BirthDate":null,"BirthPlace":"","FatherName":"Jivrajbhai","GrandFatherName":"","NodeId":-703,"RelationId":7,"AddressLine1":"a-27, radhakrishna soc., khodiyar nagar road","AddressLine2":"varachha","ZipCode":"395006","State":"0","linktoCountryMasterId":94,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"Yes","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"","MothersVillage":"","BusinessName":"","HomePhone":"8511323695","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":"2015-08-07T09:41:25.593","CreatedBy":0,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":-1,"BirthlinktoCountryMasterId":-1,"IsReplaceWithMember":null,"Spouses":[{"TreeMemberId":705,"LinkToMemberMasterId":24391,"ParentIdentityId":24391,"SiteUserId":"","FirstName":"madhuben","MiddleName":"Ashokbhai","LastName":"vaghasiya","Gender":"Female","MemberImage":"","Email":"","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-704,"RelationId":6,"AddressLine1":"a-27, radhakrishna soc., khodiyar nagar road","AddressLine2":"varachha","ZipCode":"395006","State":"0","linktoCountryMasterId":94,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"Yes","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"","MothersVillage":"","BusinessName":"","HomePhone":"8511323695","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":"2015-08-07T09:41:25.593","CreatedBy":0,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":-1,"BirthlinktoCountryMasterId":-1,"IsReplaceWithMember":null}],"children":[{"TreeMemberId":707,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"hitesh","MiddleName":"","LastName":"vaghasiya","Gender":"Male","MemberImage":"","Email":"hitesh.vaghasiya95@gmail.com","BirthDate":"2015-05-14T18:30:00","BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-704,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":94,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":94,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":703,"LinkToMemberMasterId":24391,"ParentIdentityId":24391,"SiteUserId":"","FirstName":"test","MiddleName":"a","LastName":"test","Gender":"Male","MemberImage":"70301052017103351271.jpeg","Email":"test@gmail.com","BirthDate":"1991-02-07T00:00:00","BirthPlace":"surat","FatherName":"test","GrandFatherName":"Jivrajbhai","NodeId":0,"RelationId":1,"AddressLine1":"test","AddressLine2":"test","ZipCode":"111111","State":"0","linktoCountryMasterId":94,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"811-111-1111","Mother":"madhuben","MaternalGrandFather":"Ganeshbhai","MaternalGrandMother":"Jiviben","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"test","MemberStatus":"N","PhysicalImage":"70301052017103351271_Thumb.jpeg","Village":"196","MothersVillage":"196","BusinessName":"","HomePhone":"11111111111","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":false,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":"P","IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":"2015-08-07T09:41:25.593","CreatedBy":0,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":-1,"BirthlinktoCountryMasterId":-1,"IsReplaceWithMember":null}]}]}]}]');
        this.MyHeritage(this.treeData);
    }

    MyHeritage(treeData) {
        var margin = { top: 50, right: 120, bottom: 20, left: (window.innerWidth / 2) - 50 };
        var i = 0, root;
        var tsettings = {
            width: $('#svgwrapper').width() - margin.right - margin.left,
            height: window.innerHeight + 50 - margin.top - margin.bottom,
            rect: {
                height: 90, width: 80, radious: 10,
                img: { height: 50, width: 45, padleft: 2, padtop: 5 },
                icons: {
                    add: { x: 51, y: 5 },
                    edit: { x: 53, y: 24 },
                    idelete: { x: 70, y: 80 },
                    iexpand: { x: -8, y: 83 },
                    ideceased: { x: -4, y: -2 }
                },
                oprimg: { width: 20, height: 15 }
            },
            colors: {
                colors: { rectWhite: 'white', rectRed: 'red' },
                male: { rectFill: '#9FD5EB', rectStrock: '#9FD5EB', rectTransperent: 'transparent' },
                female: { rectFill: '#F5B8DB', rectStrock: '#F5B8DB', rectTransperent: 'transparent' }
            },
            path: { distance: 180 },
            duration: 750
        };

        // ************** Generate the tree diagram	 *****************    
        debugger;
        var tree = this.d3.layout.tree().size([tsettings.rect.width + 20, tsettings.rect.height]);
        //.size([tsettings.width, tsettings.height]);

        var diagonal = this.d3.svg.diagonal().projection(function (d) {
            return [d.x + (tsettings.rect.width / 2), (d.y + tsettings.rect.height / 2)];
        });

        // remove svg has id MyHeritage.
        this.d3.select('#MyHeritage').remove();
        var svg = this.d3.select('#svgwrapper').append('svg').attr('id', 'MyHeritage')
            .attr('xmlns', 'http://www.w3.org/2000/svg')
            //.attr('preserveAspectRatio', 'xMinYMin')
            //.attr('viewBox', '0 0 ' + tsettings.width + ' ' + tsettings.height)                    
            .attr('width', tsettings.width + margin.right + margin.left)
            .attr('height', tsettings.height + margin.top + margin.bottom)
            //.call(zm = this.d3.behavior.zoom().scaleExtent([0.1, 3]).on('zoom', redraw))
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        //$('#MyHeritage').append('<defs><style type='text/css'>@font-face {font-family: 'FontAwesome';src: url(data:font/opentype;base64,[...]) format('opentype');}</style></defs>');

        //necessary so that zoom knows where to zoom and unzoom from
        //zm.translate([(window.innerWidth / 2), 50]);

        root = treeData[0];
        root.x0 = (tsettings.height || 1000) / 2;
        root.y0 = 0;

        update(root);

        //d3.select(self.frameElement).style('height', '300px');

        // generate tree.
        function update(source) {
            // Compute the new tree layout.                            
            var nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);

            // Normalize for fixed-depth.
            nodes.forEach(function (d) {
                d.y = d.depth * (tsettings.path.distance);
            });

            // Update the nodes…
            var node = svg.selectAll('g.node')
                .data(nodes, function (d) { return d.id || (d.id = ++i); });

            // Enter any new nodes at the parent's previous position.
            var nodeEnter = node.enter().append('g')
                .attr('class', 'node')
                .attr('transform', function (d) { return 'translate(' + source.x0 + ',' + source.y0 + ')'; })
                .on('click', click);

            setRect(nodeEnter);
            setImage(nodeEnter);
            setText(nodeEnter);

            // Transition nodes to their new position.                    
            updateNode(node);

            // Transition exiting nodes to the parent's new position.
            setNodeExit(node, source);

            // Update the links…
            setLinks(svg, links, source);

            // Stash the old positions for transition.
            nodes.forEach(function (d) { d.x0 = d.x; d.y0 = d.y; });
        }

        // Toggle children on click.
        function click(d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else {
                d.children = d._children;
                d._children = null;
            }
            update(d);
        }
        // set Rectangle
        function setRect(nodeEnter) {
            nodeEnter.append('rect')
                .attr('width', tsettings.rect.width)
                .attr('height', tsettings.rect.height)
                .attr('rx', tsettings.rect.radious)
                .attr('stroke', function (d) {
                    return 'blue';
                })
                .style('fill', function (d) {
                    return tsettings.colors.colors.rectWhite;
                });
        }
        // set Images
        function setImage(nodeEnter) {
            nodeEnter.append('svg:image')
                .attr('image-rendering', 'optimizeQuality')
                //.attr('dy', '5em')
                .attr('x', function (d) { return tsettings.rect.img.padleft; })
                .attr('y', function (d) { return tsettings.rect.img.padtop; })
                //.attr('dx', '20px')
                //.attr('class', 'node')
                .attr('xlink:href', function (d) {return '';})
                .attr('height', tsettings.rect.img.height)
                .attr('width', tsettings.rect.img.width);

            //add icon                    
            nodeEnter.append('svg:image')
                .attr('x', function (d) { return tsettings.rect.icons.add.x; })
                .attr('y', function (d) { return tsettings.rect.icons.add.y; })
                .attr('xlink:href', 'Images/iadd.png')
                .attr('width', tsettings.rect.oprimg.width)
                .attr('height', tsettings.rect.oprimg.height)
                .attr('data-remove-element', function (d) { return (d.IsExpand || d.SiteUserId.trim() != ''); })
                .attr('class', function (d) { return (d.IsExpand) ? 'ng-hide' : 'd3ttadd' })
                .attr('data-toggle', 'tooltip')
                .attr('data-placement', 'right')
                .on('click', function (event, d) {
                    this.d3.event.stopPropagation();
                });            
           
            //delete icon                   
            nodeEnter.append('svg:image')
                .attr('x', function (d) { return tsettings.rect.icons.idelete.x; })
                .attr('y', function (d) { return tsettings.rect.icons.idelete.y; })
                .attr('xlink:href', 'Images/idelete.png')
                .attr('width', tsettings.rect.oprimg.width)
                .attr('height', tsettings.rect.oprimg.height)
                .attr('data-remove-element', function (d) { return d.IsExpand; })
                .attr('class', function (d) { return (d.IsExpand) ? 'ng-hide' : ((d.RelationId == 1) ? 'ng-hide' : ((d.children || d._children) ? 'd3ttdelete ng-hide' : 'd3ttdelete')); })
                .attr('class', function (d) { return (d.RelationId == 1) ? 'ng-hide' : ((d.children || d._children) ? 'd3ttdelete ng-hide' : 'd3ttdelete'); })
                .attr('data-toggle', 'tooltip')
                .attr('data-placement', 'right')
                .on('click', function (event, d) {
                });
            svg.selectAll('.d3ttdelete').each(function (d, i) { $(this).prop('title', 'Delete this person'); });

            //expand tree icon                   
            nodeEnter.append('svg:image')
                .attr('x', function (d) { return tsettings.rect.icons.iexpand.x; })
                .attr('y', function (d) { return tsettings.rect.icons.iexpand.y; })
                .attr('xlink:href', 'Images/iexpand.png')
                .attr('width', tsettings.rect.oprimg.width)
                .attr('height', tsettings.rect.oprimg.height)
                .attr('class', function (d) { return (d.SiteUserId == '' || d.SiteUserId == null || d.SiteUserId == undefined) ? 'ng-hide' : 'd3ttexpand' })
                .attr('data-toggle', 'tooltip')
                .attr('data-placement', 'left')
                .on('click', function (event, d) {
                    $('.tooltip').remove();
                    this.d3.event.stopPropagation();
                });
            svg.selectAll('.d3ttexpand').each(function (d, i) { $(this).prop('title', 'Expand this tree with user'); });
        }

        // set Text
        function setText(nodeEnter) {
            nodeEnter.append('svg:text')
                .attr('dy', '70px')
                .attr('dx', '0.3em')
                .attr('textLength', function (d) { return (d.FirstName) ? (d.FirstName.length > 10 ? '73' : null) : null })
                .attr('lengthAdjust', function (d) { return (d.FirstName) ? (d.FirstName.length > 10 ? 'spacingAndGlyphs' : null) : null })
                .text(function (d) { return d.FirstName; })
                .style('fill-opacity', 1e-6)
                .style('font-size', '13px');

            nodeEnter.append('svg:text')
                .attr('dy', '85px')
                .attr('dx', '0.5em')
                .attr('textLength', '70')
                .attr('lengthAdjust', 'spacingAndGlyphs')
                .attr('class', 'd3ttspouses')
                .attr('data-toggle', 'tooltip')
                .attr('data-placement', 'right')
                .text(function (d) {
                })
                .on('click', function (d) {
                    this.d3.event.stopPropagation();
                })
                .style('fill-opacity', 1)
                .style('font-size', '11px');
        }
        function updateNode(node) {}

        // set Node on exit
        function setNodeExit(node, source) {
            var nodeExit = node.exit().transition()
                .duration(tsettings.duration)
                .attr('transform', function (d) { return 'translate(' + source.x + ',' + source.y + ')'; })
                .remove();

            nodeExit.select('text').style('fill-opacity', 1e-6);
            //nodeExit.select('image').attr('y', function (d) { return d.y + tsettings.rect.img.padtop; }).attr('width', tsettings.rect.img.width).attr('height', tsettings.rect.img.height);
            //nodeExit.select('rect').attr('width', tsettings.rect.img.width).attr('height', tsettings.rect.height);
        }

        // set and draw link paths.
        function setLinks(svg, links, source) {
            var link = svg.selectAll('path.link')
                .data(links, function (d) { return d.target.id; });

            // Enter any new links at the parent's previous position.
            link.enter().insert('path', 'g')
                .attr('class', 'link')
                .attr('d', function (d) {
                    var o = { x: source.x0, y: source.y0 };
                    return diagonal({ source: o, target: o });
                })
                .style('opacity', '0.5');

            // Transition links to their new position.
            link.transition().duration(tsettings.duration).attr('d', diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(tsettings.duration)
                .attr('d', function (d) {
                    var o = { x: source.x, y: source.y };
                    return diagonal({ source: o, target: o });
                })
                .remove();
        }

        // redraw for zooming and dragging.
        function redraw() {
            //console.log('here', d3.event.translate,d3.event.scale);
            svg.attr('transform', 'translate(' + this.d3.event.translate + ')' + ' scale(' + this.d3.event.scale + ')');
        }
    }


}