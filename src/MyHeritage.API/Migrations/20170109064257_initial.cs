using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MyHeritage.API.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TreeMemberHeritages",
                columns: table => new
                {
                    TreeMemberId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AddressLine1 = table.Column<string>(nullable: true),
                    AddressLine2 = table.Column<string>(nullable: true),
                    BirthDate = table.Column<DateTime>(nullable: true),
                    BirthPlace = table.Column<string>(nullable: true),
                    BirthlinktoCountryMasterId = table.Column<int>(nullable: true),
                    BusinessAddress = table.Column<string>(nullable: true),
                    BusinessCity = table.Column<string>(nullable: true),
                    BusinessEmail = table.Column<string>(nullable: true),
                    BusinessName = table.Column<string>(nullable: true),
                    BusinessPhone = table.Column<string>(nullable: true),
                    BusinessState = table.Column<string>(nullable: true),
                    BusinessZip = table.Column<string>(nullable: true),
                    CauseOfDeath = table.Column<string>(nullable: true),
                    Cell = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    CreateDate = table.Column<DateTime>(nullable: true),
                    CreatedBy = table.Column<int>(nullable: true),
                    DeceasedDate = table.Column<DateTime>(nullable: true),
                    DeceasedPlace = table.Column<string>(nullable: true),
                    DoNotEmailFromEPS = table.Column<string>(nullable: true),
                    DoNotPrint = table.Column<bool>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    EmailFromVS = table.Column<string>(nullable: true),
                    FatherName = table.Column<string>(nullable: true),
                    Fax = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    Gender = table.Column<string>(nullable: true),
                    GrandFatherName = table.Column<string>(nullable: true),
                    HomePhone = table.Column<string>(nullable: true),
                    Industry = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsApproxBirthdate = table.Column<bool>(nullable: false),
                    IsBoard = table.Column<bool>(nullable: true),
                    IsDeceased = table.Column<bool>(nullable: false),
                    IsDisplayImage = table.Column<bool>(nullable: false),
                    IsDoNotPrint1 = table.Column<bool>(nullable: true),
                    IsDuesPaid2007 = table.Column<bool>(nullable: true),
                    IsDuesPaid2008 = table.Column<bool>(nullable: true),
                    IsDuesPaid2009 = table.Column<bool>(nullable: true),
                    IsDuesPaid2010 = table.Column<bool>(nullable: true),
                    IsDuesPaid2011 = table.Column<bool>(nullable: true),
                    IsDuesPaid2012 = table.Column<bool>(nullable: true),
                    IsDuesPaid2013 = table.Column<bool>(nullable: true),
                    IsLifeMember = table.Column<bool>(nullable: true),
                    IsReplaceWithMember = table.Column<bool>(nullable: true),
                    LastModifiedBy = table.Column<int>(nullable: true),
                    LastModifiedDate = table.Column<DateTime>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    LinkToMemberMasterId = table.Column<int>(nullable: false),
                    LinktoStateMasterId = table.Column<int>(nullable: true),
                    MainComments = table.Column<string>(nullable: true),
                    MaritalStatus = table.Column<string>(nullable: true),
                    MaternalGrandFather = table.Column<string>(nullable: true),
                    MaternalGrandMother = table.Column<string>(nullable: true),
                    MemberImage = table.Column<string>(nullable: true),
                    MemberStatus = table.Column<char>(nullable: true),
                    MiddleName = table.Column<string>(nullable: true),
                    Mother = table.Column<string>(nullable: true),
                    MothersVillage = table.Column<string>(nullable: true),
                    NodeId = table.Column<long>(nullable: false),
                    Occupation = table.Column<string>(nullable: true),
                    ParentIdentityId = table.Column<int>(nullable: false),
                    PhysicalImage = table.Column<string>(nullable: true),
                    RelationId = table.Column<int>(nullable: false),
                    SiteUserId = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true),
                    Village = table.Column<string>(nullable: true),
                    WhoUpdated = table.Column<string>(nullable: true),
                    ZipCode = table.Column<string>(nullable: true),
                    callstatus = table.Column<char>(nullable: true),
                    linktoCountryMasterId = table.Column<int>(nullable: true),
                    linktoGamDetailId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TreeMemberHeritages", x => x.TreeMemberId);
                });

            migrationBuilder.CreateTable(
                name: "TreeRelationMaster",
                columns: table => new
                {
                    RelationId = table.Column<short>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    OrderId = table.Column<int>(nullable: false),
                    RelationName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TreeRelationMaster", x => x.RelationId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TreeMemberHeritages");

            migrationBuilder.DropTable(
                name: "TreeRelationMaster");
        }
    }
}
