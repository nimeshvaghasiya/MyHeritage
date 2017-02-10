import { Component } from '@angular/core';
import { MyHeritageService } from '../../shared/services/myharitage.service'
import * as d3 from "d3/index";

@Component({
    templateUrl: 'myheritage.component.html'
})

export class MyHeritageComponent {
    treeData: any;
    constructor(private myHeritageService: MyHeritageService
    ) {
        this.treeData = JSON.parse('[{"TreeMemberId":711,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"Jasmatbhai","MiddleName":"","LastName":"vaghasiya","Gender":"Male","MemberImage":"","Email":"jasmatbhai@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-706,"RelationId":2,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":null,"Spouses":[{"TreeMemberId":712,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"Ambaben","MiddleName":"","LastName":"vaghasiya","Gender":"Female","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":6,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false}],"children":[{"TreeMemberId":713,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"kankuben","MiddleName":"","LastName":"vaghasiya","Gender":"Female","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":8,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":714,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"arajanbhai","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[{"TreeMemberId":720,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"karamshibhai","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-714,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[{"TreeMemberId":722,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"sandip","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-720,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":723,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"manish","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-720,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":725,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"jalpa","MiddleName":"","LastName":"","Gender":"Female","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-720,"RelationId":8,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":null,"children":[]}]},{"TreeMemberId":721,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"mukeshbhai","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-714,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]}]},{"TreeMemberId":715,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"gulalben","MiddleName":"","LastName":"","Gender":"Female","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":8,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":null,"children":[]},{"TreeMemberId":716,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"chandubhai","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":717,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"valiben","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":718,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"shantaben","MiddleName":"","LastName":"","Gender":"Female","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":8,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":719,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"vallabhbhai","MiddleName":"","LastName":"","Gender":"Male","MemberImage":"","Email":"vaghasiya@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-711,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":706,"LinkToMemberMasterId":24391,"ParentIdentityId":24391,"SiteUserId":"","FirstName":"Jivrajbhai","MiddleName":"","LastName":"vaghasiya","Gender":"Male","MemberImage":"","Email":"","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-704,"RelationId":7,"AddressLine1":"a-27, radhakrishna soc., khodiyar nagar road","AddressLine2":"varachha","ZipCode":"395006","State":"0","linktoCountryMasterId":94,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"Yes","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"","MothersVillage":"","BusinessName":"","HomePhone":"8511323695","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":"2015-08-07T09:41:25.593","CreatedBy":0,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":-1,"BirthlinktoCountryMasterId":-1,"IsReplaceWithMember":null,"Spouses":[{"TreeMemberId":708,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"viruben","MiddleName":"","LastName":"","Gender":"Female","MemberImage":"","Email":"","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-706,"RelationId":6,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":true,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false}],"children":[{"TreeMemberId":709,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"Anusoyaben","MiddleName":"","LastName":"","Gender":"Female","MemberImage":"","Email":"anusoyaben@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-706,"RelationId":8,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":710,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"Kailasben","MiddleName":"","LastName":"","Gender":"Female","MemberImage":"","Email":"kailasben@gmail.com","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-706,"RelationId":8,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":216,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":216,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":null,"children":[]},{"TreeMemberId":704,"LinkToMemberMasterId":24391,"ParentIdentityId":24391,"SiteUserId":"","FirstName":"Ashokbhai","MiddleName":"Jivrajbhai","LastName":"vaghasiya","Gender":"Male","MemberImage":"","Email":"","BirthDate":null,"BirthPlace":"","FatherName":"Jivrajbhai","GrandFatherName":"","NodeId":-703,"RelationId":7,"AddressLine1":"a-27, radhakrishna soc., khodiyar nagar road","AddressLine2":"varachha","ZipCode":"395006","State":"0","linktoCountryMasterId":94,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"Yes","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"","MothersVillage":"","BusinessName":"","HomePhone":"8511323695","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":"2015-08-07T09:41:25.593","CreatedBy":0,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":-1,"BirthlinktoCountryMasterId":-1,"IsReplaceWithMember":null,"Spouses":[{"TreeMemberId":705,"LinkToMemberMasterId":24391,"ParentIdentityId":24391,"SiteUserId":"","FirstName":"madhuben","MiddleName":"Ashokbhai","LastName":"vaghasiya","Gender":"Female","MemberImage":"","Email":"","BirthDate":null,"BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-704,"RelationId":6,"AddressLine1":"a-27, radhakrishna soc., khodiyar nagar road","AddressLine2":"varachha","ZipCode":"395006","State":"0","linktoCountryMasterId":94,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"Yes","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"","MothersVillage":"","BusinessName":"","HomePhone":"8511323695","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":"2015-08-07T09:41:25.593","CreatedBy":0,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":-1,"BirthlinktoCountryMasterId":-1,"IsReplaceWithMember":null}],"children":[{"TreeMemberId":707,"LinkToMemberMasterId":24391,"ParentIdentityId":0,"SiteUserId":"","FirstName":"hitesh","MiddleName":"","LastName":"vaghasiya","Gender":"Male","MemberImage":"","Email":"hitesh.vaghasiya95@gmail.com","BirthDate":"2015-05-14T18:30:00","BirthPlace":"","FatherName":"","GrandFatherName":"","NodeId":-704,"RelationId":7,"AddressLine1":"","AddressLine2":"","ZipCode":"","State":"-1","linktoCountryMasterId":94,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"","Mother":"","MaternalGrandFather":"","MaternalGrandMother":"","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"","MemberStatus":null,"PhysicalImage":"","Village":"-1","MothersVillage":"-1","BusinessName":"","HomePhone":"","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":null,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":null,"IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":null,"CreatedBy":null,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":94,"BirthlinktoCountryMasterId":216,"IsReplaceWithMember":false,"children":[]},{"TreeMemberId":703,"LinkToMemberMasterId":24391,"ParentIdentityId":24391,"SiteUserId":"","FirstName":"test","MiddleName":"a","LastName":"test","Gender":"Male","MemberImage":"70301052017103351271.jpeg","Email":"test@gmail.com","BirthDate":"1991-02-07T00:00:00","BirthPlace":"surat","FatherName":"test","GrandFatherName":"Jivrajbhai","NodeId":0,"RelationId":1,"AddressLine1":"test","AddressLine2":"test","ZipCode":"111111","State":"0","linktoCountryMasterId":94,"Fax":"","IsApproxBirthdate":false,"MaritalStatus":"No","Cell":"811-111-1111","Mother":"madhuben","MaternalGrandFather":"Ganeshbhai","MaternalGrandMother":"Jiviben","Occupation":"","IsDisplayImage":true,"IsActive":true,"City":"test","MemberStatus":"N","PhysicalImage":"70301052017103351271_Thumb.jpeg","Village":"196","MothersVillage":"196","BusinessName":"","HomePhone":"11111111111","BusinessPhone":"","BusinessEmail":"","BusinessAddress":"","BusinessCity":"","BusinessState":"-1","BusinessZip":"","IsBoard":null,"MainComments":"","DoNotEmailFromEPS":"","EmailFromVS":"","Industry":"","DoNotPrint":null,"WhoUpdated":"","IsDuesPaid2007":null,"IsLifeMember":false,"IsDoNotPrint1":null,"IsDuesPaid2008":null,"IsDuesPaid2009":null,"IsDuesPaid2010":null,"IsDuesPaid2011":null,"IsDuesPaid2012":null,"IsDuesPaid2013":null,"linktoGamDetailId":2,"callstatus":"P","IsDeceased":false,"DeceasedDate":null,"DeceasedPlace":"","CauseOfDeath":"","CreateDate":"2015-08-07T09:41:25.593","CreatedBy":0,"LastModifiedDate":null,"LastModifiedBy":null,"LinktoStateMasterId":-1,"BirthlinktoCountryMasterId":-1,"IsReplaceWithMember":null}]}]}]}]');
        setTimeout(() => {
            this.MyHeritage();
        },5000);
        
    }

    MyHeritage() {
        //var margin = { top: 50, right: 120, bottom: 20, left: (window.innerWidth / 2) - 50 };
        //var i = 0, root;
        //var tsettings = {
        //    width: $('#svgwrapper').width() - margin.right - margin.left,
        //    height: window.innerHeight + 50 - margin.top - margin.bottom,
        //    rect: {
        //        height: 90, width: 80, radious: 10,
        //        img: { height: 50, width: 45, padleft: 2, padtop: 5 },
        //        icons: {
        //            add: { x: 51, y: 5 },
        //            edit: { x: 53, y: 24 },
        //            idelete: { x: 70, y: 80 },
        //            iexpand: { x: -8, y: 83 },
        //            ideceased: { x: -4, y: -2 }
        //        },
        //        oprimg: { width: 20, height: 15 }
        //    },
        //    colors: {
        //        colors: { rectWhite: 'white', rectRed: 'red' },
        //        male: { rectFill: '#9FD5EB', rectStrock: '#9FD5EB', rectTransperent: 'transparent' },
        //        female: { rectFill: '#F5B8DB', rectStrock: '#F5B8DB', rectTransperent: 'transparent' }
        //    },
        //    path: { distance: 180 },
        //    duration: 750
        //};

        var treeData =
            {
                "name": "Top Level",
                "children": [
                    {
                        "name": "Level 2: A",
                        "children": [
                            { "name": "Son of A" },
                            { "name": "Daughter of A" }
                        ]
                    },
                    { "name": "Level 2: B" }
                ]
            };

        // Set the dimensions and margins of the diagram
        var margin = { top: 20, right: 90, bottom: 30, left: 90 },
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select("#svgwrapper").append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate("
            + margin.left + "," + margin.top + ")");

        var i = 0,
            duration = 750,
            root;

        // declares a tree layout and assigns the size
        var treemap = d3.tree().size([height, width]);

        // Assigns parent, children, height, depth
        root = d3.hierarchy(treeData, function (d) { return d.children; });
        root.x0 = height / 2;
        root.y0 = 0;

        // Collapse after the second level
        root.children.forEach(collapse);

        update(root);

        // Collapse the node and all it's children
        function collapse(d) {
            if (d.children) {
                d._children = d.children
                d._children.forEach(collapse)
                d.children = null
            }
        }

        function update(source) {
            // Assigns the x and y position for the nodes
            var treeData = treemap(root);

            // Compute the new tree layout.
            var nodes = treeData.descendants(),
                links = treeData.descendants().slice(1);

            // Normalize for fixed-depth.
            nodes.forEach(function (d) { d.y = d.depth * 180 });

            // ****************** Nodes section ***************************

            // Update the nodes...
            var node = svg.selectAll('g.node')
                .data(nodes, function (d) { return d.id || (d.id = ++i); });

            // Enter any new modes at the parent's previous position.
            var nodeEnter = node.enter().append('g')
                .attr('class', 'node')
                .attr("transform", function (d) {
                    return "translate(" + source.y0 + "," + source.x0 + ")";
                })
                .on('click', click);

            // Add Circle for the nodes
            nodeEnter.append('circle')
                .attr('class', 'node')
                .attr('r', 1e-6)
                .style("fill", function (d) {
                    return d._children ? "lightsteelblue" : "#fff";
                });

            // Add labels for the nodes
            nodeEnter.append('text')
                .attr("dy", ".35em")
                .attr("x", function (d) {
                    return d.children || d._children ? -13 : 13;
                })
                .attr("text-anchor", function (d) {
                    return d.children || d._children ? "end" : "start";
                })
                .text(function (d) { return d.data.name; });

            // UPDATE
            var nodeUpdate = nodeEnter.merge(node);

            // Transition to the proper position for the node
            nodeUpdate.transition()
                .duration(duration)
                .attr("transform", function (d) {
                    return "translate(" + d.y + "," + d.x + ")";
                });

            // Update the node attributes and style
            nodeUpdate.select('circle.node')
                .attr('r', 10)
                .style("fill", function (d) {
                    return d._children ? "lightsteelblue" : "#fff";
                })
                .attr('cursor', 'pointer');


            // Remove any exiting nodes
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) {
                    return "translate(" + source.y + "," + source.x + ")";
                })
                .remove();

            // On exit reduce the node circles size to 0
            nodeExit.select('circle')
                .attr('r', 1e-6);

            // On exit reduce the opacity of text labels
            nodeExit.select('text')
                .style('fill-opacity', 1e-6);

            // ****************** links section ***************************

            // Update the links...
            var link = svg.selectAll('path.link')
                .data(links, function (d) { return d.id; });

            // Enter any new links at the parent's previous position.
            var linkEnter = link.enter().insert('path', "g")
                .attr("class", "link")
                .attr('d', function (d) {
                    var o = { x: source.x0, y: source.y0 }
                    return diagonal(o, o)
                });

            // UPDATE
            var linkUpdate = linkEnter.merge(link);

            // Transition back to the parent element position
            linkUpdate.transition()
                .duration(duration)
                .attr('d', function (d) { return diagonal(d, d.parent) });

            // Remove any exiting links
            var linkExit = link.exit().transition()
                .duration(duration)
                .attr('d', function (d) {
                    var o = { x: source.x, y: source.y }
                    return diagonal(o, o)
                })
                .remove();

            // Store the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });

            // Creates a curved (diagonal) path from parent to the child nodes
            function diagonal(s, d) {
                var path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

                return path
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
        }
    }
}