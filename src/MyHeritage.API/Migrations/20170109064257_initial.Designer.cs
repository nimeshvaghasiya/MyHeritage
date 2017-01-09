using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using MyHeritage.Data;

namespace MyHeritage.API.Migrations
{
    [DbContext(typeof(MyHeritageContext))]
    [Migration("20170109064257_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MyHeritage.Model.Entity.TreeMemberHeritage", b =>
                {
                    b.Property<long>("TreeMemberId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AddressLine1");

                    b.Property<string>("AddressLine2");

                    b.Property<DateTime?>("BirthDate");

                    b.Property<string>("BirthPlace");

                    b.Property<int?>("BirthlinktoCountryMasterId");

                    b.Property<string>("BusinessAddress");

                    b.Property<string>("BusinessCity");

                    b.Property<string>("BusinessEmail");

                    b.Property<string>("BusinessName");

                    b.Property<string>("BusinessPhone");

                    b.Property<string>("BusinessState");

                    b.Property<string>("BusinessZip");

                    b.Property<string>("CauseOfDeath");

                    b.Property<string>("Cell");

                    b.Property<string>("City");

                    b.Property<DateTime?>("CreateDate");

                    b.Property<int?>("CreatedBy");

                    b.Property<DateTime?>("DeceasedDate");

                    b.Property<string>("DeceasedPlace");

                    b.Property<string>("DoNotEmailFromEPS");

                    b.Property<bool?>("DoNotPrint");

                    b.Property<string>("Email");

                    b.Property<string>("EmailFromVS");

                    b.Property<string>("FatherName");

                    b.Property<string>("Fax");

                    b.Property<string>("FirstName");

                    b.Property<string>("Gender");

                    b.Property<string>("GrandFatherName");

                    b.Property<string>("HomePhone");

                    b.Property<string>("Industry");

                    b.Property<bool>("IsActive");

                    b.Property<bool>("IsApproxBirthdate");

                    b.Property<bool?>("IsBoard");

                    b.Property<bool>("IsDeceased");

                    b.Property<bool>("IsDisplayImage");

                    b.Property<bool?>("IsDoNotPrint1");

                    b.Property<bool?>("IsDuesPaid2007");

                    b.Property<bool?>("IsDuesPaid2008");

                    b.Property<bool?>("IsDuesPaid2009");

                    b.Property<bool?>("IsDuesPaid2010");

                    b.Property<bool?>("IsDuesPaid2011");

                    b.Property<bool?>("IsDuesPaid2012");

                    b.Property<bool?>("IsDuesPaid2013");

                    b.Property<bool?>("IsLifeMember");

                    b.Property<bool?>("IsReplaceWithMember");

                    b.Property<int?>("LastModifiedBy");

                    b.Property<DateTime?>("LastModifiedDate");

                    b.Property<string>("LastName");

                    b.Property<int>("LinkToMemberMasterId");

                    b.Property<int?>("LinktoStateMasterId");

                    b.Property<string>("MainComments");

                    b.Property<string>("MaritalStatus");

                    b.Property<string>("MaternalGrandFather");

                    b.Property<string>("MaternalGrandMother");

                    b.Property<string>("MemberImage");

                    b.Property<char?>("MemberStatus");

                    b.Property<string>("MiddleName");

                    b.Property<string>("Mother");

                    b.Property<string>("MothersVillage");

                    b.Property<long>("NodeId");

                    b.Property<string>("Occupation");

                    b.Property<int>("ParentIdentityId");

                    b.Property<string>("PhysicalImage");

                    b.Property<int>("RelationId");

                    b.Property<string>("SiteUserId");

                    b.Property<string>("State");

                    b.Property<string>("Village");

                    b.Property<string>("WhoUpdated");

                    b.Property<string>("ZipCode");

                    b.Property<char?>("callstatus");

                    b.Property<int?>("linktoCountryMasterId");

                    b.Property<int>("linktoGamDetailId");

                    b.HasKey("TreeMemberId");

                    b.ToTable("TreeMemberHeritages");
                });

            modelBuilder.Entity("MyHeritage.Model.Entity.TreeRelationMaster", b =>
                {
                    b.Property<short>("RelationId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("OrderId");

                    b.Property<string>("RelationName");

                    b.HasKey("RelationId");

                    b.ToTable("TreeRelationMaster");
                });
        }
    }
}
