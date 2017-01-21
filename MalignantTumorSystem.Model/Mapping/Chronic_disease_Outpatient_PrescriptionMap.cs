using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Outpatient_PrescriptionMap :EntityTypeConfiguration<Chronic_disease_Outpatient_Prescription>
    {
        public Chronic_disease_Outpatient_PrescriptionMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.contact_id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.medical_name)
                .HasMaxLength(50);

            this.Property(t => t.medical_specifications)
                .HasMaxLength(50);

            this.Property(t => t.medical_usage)
                .HasMaxLength(50);

            this.Property(t => t.medical_dosage)
                .HasMaxLength(50);

            this.Property(t => t.medical_frequency)
                .HasMaxLength(50);

            this.Property(t => t.medical_day)
                .HasMaxLength(50);

            this.Property(t => t.medical_total)
                .HasMaxLength(50);

            this.Property(t => t.medical_unit)
                .HasMaxLength(50);

            this.Property(t => t.medical_price)
                .HasMaxLength(50);

            this.Property(t => t.medical_min_unit)
                .HasMaxLength(50);

            this.Property(t => t.medical_manufacturer)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Outpatient_Prescription");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.contact_id).HasColumnName("contact_id");
            this.Property(t => t.medical_name).HasColumnName("medical_name");
            this.Property(t => t.medical_specifications).HasColumnName("medical_specifications");
            this.Property(t => t.medical_usage).HasColumnName("medical_usage");
            this.Property(t => t.medical_dosage).HasColumnName("medical_dosage");
            this.Property(t => t.medical_frequency).HasColumnName("medical_frequency");
            this.Property(t => t.medical_day).HasColumnName("medical_day");
            this.Property(t => t.medical_total).HasColumnName("medical_total");
            this.Property(t => t.medical_unit).HasColumnName("medical_unit");
            this.Property(t => t.medical_price).HasColumnName("medical_price");
            this.Property(t => t.medical_min_unit).HasColumnName("medical_min_unit");
            this.Property(t => t.medical_manufacturer).HasColumnName("medical_manufacturer");
        }
    }
}

