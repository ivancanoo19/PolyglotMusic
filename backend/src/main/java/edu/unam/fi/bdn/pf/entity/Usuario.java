package edu.unam.fi.bdn.pf.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Usuario {
    private String id;         // _id en MongoDB
    private String email;
    private String username;
    private String password;
    private Date createdAt;
}