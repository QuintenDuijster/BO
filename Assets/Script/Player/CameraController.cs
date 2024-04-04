using UnityEngine;

public class CameraController : MonoBehaviour
{
    [SerializeField] private Transform player;

    void LateUpdate()
    {
        transform.rotation = player.rotation;
        transform.position = new Vector3(player.position.x, player.position.y + 1.8f, player.position.z + 0.01f);
    }
}
