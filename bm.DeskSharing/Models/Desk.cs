﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace bm.DeskSharing.Models;

public partial class Desk
{
    public long DID { get; set; }

    public string DCode { get; set; }

    public string DType { get; set; }

    public string DDesc { get; set; }

    public long fkRID { get; set; }

    public DateTime tsCreated { get; set; }

    public DateTime tsModify { get; set; }

    public string sUser { get; set; }

    public bool? isActive { get; set; }

    public virtual Room fkR { get; set; }
}