using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_BloodGlucose_AddMap : EntityTypeConfiguration<Chronic_disease_BloodGlucose_Add>
    {
        public Chronic_disease_BloodGlucose_AddMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.add_id)
                .HasMaxLength(50);

            this.Property(t => t.time)
                .HasMaxLength(50);

            this.Property(t => t.bloodsugar)
                .HasMaxLength(50);

            this.Property(t => t.place)
                .HasMaxLength(50);

            this.Property(t => t.types)
                .HasMaxLength(50);

            this.Property(t => t.state)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_BloodGlucose_Add");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.add_id).HasColumnName("add_id");
            this.Property(t => t.data).HasColumnName("data");
            this.Property(t => t.time).HasColumnName("time");
            this.Property(t => t.bloodsugar).HasColumnName("bloodsugar");
            this.Property(t => t.place).HasColumnName("place");
            this.Property(t => t.types).HasColumnName("types");
            this.Property(t => t.state).HasColumnName("state");
        }
    }
}
