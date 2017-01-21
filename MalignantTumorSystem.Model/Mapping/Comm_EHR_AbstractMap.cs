using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Comm_EHR_AbstractMap : EntityTypeConfiguration<Comm_EHR_Abstract>
    {
        public Comm_EHR_AbstractMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.resident_id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.item_type)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.item_id)
                .IsRequired()
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Comm_EHR_Abstract");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.item_type).HasColumnName("item_type");
            this.Property(t => t.item_id).HasColumnName("item_id");
            this.Property(t => t.create_time).HasColumnName("create_time");
        }
    }
}

