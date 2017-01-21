using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Hospitalization_DischargeAbstract_AdviceMap :EntityTypeConfiguration<Chronic_disease_Hospitalization_DischargeAbstract_Advice>
    {
        public Chronic_disease_Hospitalization_DischargeAbstract_AdviceMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.advice_id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.context)
                .HasMaxLength(500);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Hospitalization_DischargeAbstract_Advice");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.advice_id).HasColumnName("advice_id");
            this.Property(t => t.context).HasColumnName("context");
        }
    }
}
