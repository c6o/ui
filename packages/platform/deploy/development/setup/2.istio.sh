#! /bin/bash

istioctlpath=$(which istioctl)

if [ -z "$istioctlpath" ]; then
    echo "ERROR: istioctl was not found"
    exit 1
fi

istiopath=$(dirname "$(which "$istioctlpath")")
echo "Using istio at $istiopath"

istoconfig=$(helm template $istiopath/../install/kubernetes/helm/istio \
  --name istio \
  --namespace istio-system \
  --set grafana.enabled=true)

kubectl create namespace istio-system

kubectl apply -f $istiopath/../install/kubernetes/helm/istio/templates/crds.yaml

cat <<EOF | kubectl create -f -
$istoconfig
EOF

kubectl get pods -n istio-system