using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
  public  class TestMap:EntityTypeConfiguration<Test>
    {
      public TestMap()
      {
          this.HasKey(t => t.id);

          // Properties
          this.Property(t => t.id)
              .IsRequired()
              .HasMaxLength(50);
          this.Property(t => t.id1) 
             .HasMaxLength(50);
          this.Property(t => t.id2) 
             .HasMaxLength(50);
          this.Property(t => t.id3) 
             .HasMaxLength(50);
          this.Property(t => t.id4) 
             .HasMaxLength(50);
          this.Property(t => t.id5) 
             .HasMaxLength(50);
          this.ToTable("Test");
          this.Property(t => t.id).HasColumnName("id");
          this.Property(t => t.id1).HasColumnName("id1");
          this.Property(t => t.id2).HasColumnName("id2");
          this.Property(t => t.id3).HasColumnName("id3");
          this.Property(t => t.id4).HasColumnName("id4");
          this.Property(t => t.id5).HasColumnName("id5");
      }
    }
}
