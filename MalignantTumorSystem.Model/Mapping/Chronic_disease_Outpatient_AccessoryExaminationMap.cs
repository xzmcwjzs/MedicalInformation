using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Outpatient_AccessoryExaminationMap :EntityTypeConfiguration<Chronic_disease_Outpatient_AccessoryExamination>
    {
        public Chronic_disease_Outpatient_AccessoryExaminationMap()
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

            this.Property(t => t.context)
                .HasMaxLength(500);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Outpatient_AccessoryExamination");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.contact_id).HasColumnName("contact_id");
            this.Property(t => t.context).HasColumnName("context");
        }
    }
}

