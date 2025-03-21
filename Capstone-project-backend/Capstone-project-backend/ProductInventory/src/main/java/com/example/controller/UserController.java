package com.example.controller;

import com.example.model.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")  // This must match the URL prefix
@CrossOrigin(origins = "http://localhost:4200")  // Allow frontend calls
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")  // This must match the "/register" path
    public User registerUser(@RequestBody User user) {
        System.out.println("🚀 Register API Called!");  // Debugging Log
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public boolean loginUser(@RequestBody User user) {
        System.out.println("🚀 Login API Called!");  // Debugging Log
        Optional<User> foundUser = userService.findByEmail(user.getEmail());
        return foundUser.isPresent() && foundUser.get().getPassword().equals(user.getPassword());
    }
}
