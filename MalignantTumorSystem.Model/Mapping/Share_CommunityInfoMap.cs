using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Share_CommunityInfoMap : EntityTypeConfiguration<Share_CommunityInfo>
    {
        public Share_CommunityInfoMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.name)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.address)
                .HasMaxLength(500);

            this.Property(t => t.code)
                .HasMaxLength(50);

            this.Property(t => t.street_code)
                .HasMaxLength(50);

            this.Property(t => t.responsible_person)
                .HasMaxLength(50);

            this.Property(t => t.responsible_person_phone)
                .HasMaxLength(50);

            this.Property(t => t.post_code)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Share_CommunityInfo");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.address).HasColumnName("address");
            this.Property(t => t.code).HasColumnName("code");
            this.Property(t => t.street_code).HasColumnName("street_code");
            this.Property(t => t.responsible_person).HasColumnName("responsible_person");
            this.Property(t => t.responsible_person_phone).HasColumnName("responsible_person_phone");
            this.Property(t => t.post_code).HasColumnName("post_code");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.last_static_time).HasColumnName("last_static_time");
        }
    }
}
