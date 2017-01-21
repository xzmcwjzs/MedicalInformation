using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Comm_ResidentFile_Change_AddressMap : EntityTypeConfiguration<Comm_ResidentFile_Change_Address>
    {
        public Comm_ResidentFile_Change_AddressMap()
        {
            // Primary Key
            this.HasKey(t =>t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.contact_id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.resident_id)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .HasMaxLength(50);

            this.Property(t => t.permanent_address)
                .HasMaxLength(500);

            this.Property(t => t.fill_person)
                .HasMaxLength(50);

            this.Property(t => t.fill_community_code)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Comm_ResidentFile_Change_Address");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.contact_id).HasColumnName("contact_id");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.permanent_address).HasColumnName("permanent_address");
            this.Property(t => t.fill_person).HasColumnName("fill_person");
            this.Property(t => t.fill_community_code).HasColumnName("fill_community_code");
            this.Property(t => t.create_time).HasColumnName("create_time");
        }
    }
}
