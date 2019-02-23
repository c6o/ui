#! /bin/bash

minikube profile traxitt

minikube start \
    --profile=traxitt \
    --memory=8192 --cpus=4 --kubernetes-version=v1.13.0 \
    --insecure-registry="solarwind:5000" \
    --vm-driver=hyperkit
