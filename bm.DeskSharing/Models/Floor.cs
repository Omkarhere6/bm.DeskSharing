﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace bm.DeskSharing.Models;

public partial class Floor
{
    public long FID { get; set; }

    public string FCode { get; set; }

    public string FName { get; set; }

    public string FDesc { get; set; }

    public long fkBID { get; set; }

    public DateTime tsCreated { get; set; }

    public DateTime tsModify { get; set; }

    public string sUser { get; set; }

    public bool? isActive { get; set; }

    public virtual ICollection<Room> Rooms { get; } = new List<Room>();

    public virtual Building fkB { get; set; }
}